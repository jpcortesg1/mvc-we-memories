const changeLanguage = (req, res) => {
  try {
    console.log("hola")
    const languages = ['ES', 'EN']
    const lang = req.params.lang.toUpperCase()

    if (!languages.includes(lang)) {
      return res.json({
        error: 'Language not found',
        status: 400
      })
    }
    
    res.cookie("lang", lang, {maxAge: 900000, httpOnly: true})
    
    return res.json({
      message: 'Change of language success!',
      status: 200,
      data: {
        language: lang
      }
    })
  } catch (error) {
    return res.json({
      error: error.message,
      status: 500  
    })
  }
}

export default changeLanguage;