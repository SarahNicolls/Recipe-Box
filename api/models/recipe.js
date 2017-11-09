module.exports = db => {
  let Recipe = db.createModel("Recipe", {
    dateModified: db.type.string(),
    id: db.type.string(),
    idMeal: db.type.string(),
    strArea: db.type.string(),
    strCategory: db.type.string(),
    strInstructions: db.type.string(),
    strMeal: db.type.string(),
    strMealThumb: db.type.string(),
    strSource: db.type.string(),
    strYoutube: db.type.string(),
  })

  return Recipe;
}