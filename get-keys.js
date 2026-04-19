export default function handler(req, res) {
  // Aquí defines tus llaves. Puedes agregar todas las que necesites.
  const keys = {
    "4c230dbc7f6a4bfa6ad0aa73ff792374": "4186a7c2a15f590a9399886feaec4257",
    "otra-key-id": "otra-key-valor"
  };

  const { kid } = req.query;

  if (kid && keys[kid]) {
    // Retorna el formato que espera la mayoría de reproductores (JSON)
    res.status(200).json({
      keys: [
        {
          kty: "oct",
          k: keys[kid],
          kid: kid
        }
      ]
    });
  } else {
    res.status(404).json({ error: "Key ID no encontrado o no proporcionado" });
  }
}