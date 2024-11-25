import express from "express";
import bodyParser from "body-parser";
import { config } from "dotenv";
import { testConnection } from "./database/conection.js";
import cors from "cors";

import Hotelroutes from "./router/router.js";

config();

const app = express();


app.use(bodyParser.json());
app.use(cors({ origin: "*" }));


app.use(Hotelroutes);





async function consultarChatGPT(pergunta, apiKey) {
  try {
    const resposta = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + apiKey,
      },
      body: JSON.stringify({
        model: "gpt-3gpt-3.5", 
        messages: [
          {
            role: "system",
            content: "Você é um assistente que classifica tipos de hospedagem.",
          },
          { role: "user", content: pergunta },
        ],
        max_tokens: 2048, 
        temperature: 0.5, 
      }),
    });

    const dados = await resposta.json();

    
    if (dados && dados.choices && dados.choices.length > 0) {
      return dados.choices[0].message.content.trim();
    } else {
      console.error("Resposta inválida da API:", dados);
      return "Erro: resposta inválida do ChatGPT.";
    }
  } catch (error) {
    console.error("Erro ao conectar com o ChatGPT:", error);
    return "Erro ao consultar o ChatGPT.";
  }
}


app.post("/categorizar", async (req, res) => {
  const { nome, descricao, endereco } = req.body;

  if (!descricao || !endereco) {
    return res
      .status(400)
      .json({ error: "Descrição e endereço são obrigatórios." });
  }

  try {
    const prompt = `
        Baseado nas informações fornecidas, categorize o tipo de hospedagem como 'hotel', 'pousada', 'chalé', ou outros. 
        Informações:
        Nome: ${nome || "Não fornecido"}
        Descrição: ${descricao}
        Endereço: ${endereco}
        Responda apenas com a categoria.`;

    
    const categoria = await consultarChatGPT(
      prompt,
      process.env.OPENAI_API_KEY
    );

    res.json({ message: "Hotel categorizado com sucesso!", categoria });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao categorizar hotel." });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  testConnection();
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
