import book from "../../dados/fantasia.json";

export default function handlerBooks(req, res) {
  res.status(200).json(book);
}
