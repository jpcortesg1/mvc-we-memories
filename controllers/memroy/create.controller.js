const create = (req, res) => {
  try {
    const data = req;
    console.log("🚀 ~ create ~ data:", data)
    return res
      .json({ message: "Hello World from memroies routes", status: 200 })
      .status(200);
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({ error: error.message, status: 500 });
  }
};

export default create;
