import book from "../../dados/01-fantasia.json";

export default function handlerBooks(req, res) {
  res.status(200).json(book);
}
