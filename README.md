## Recipes

https://ijuliie.github.io/recipe-app/

### Overview

This project was made to show my current technical skills for React.

### Motivation

This was assigned to be a project by my school General Assembly. It was assigned to test our skills using React. I learned so much and had so much fun making this app. There's still a couple more things that I would like to add.

### Tech/Framework

**Built with:**

    -Wireframe
    -React
    -Bootstrap

### API Reference

I learned how to use Edamam to fetch data from their API and was able to render the things that I wanted in my project.

https://developer.edamam.com/edamam-recipe-api

### Future Plans

I wanted to make a favorites component so that the when the user finds a recipe that they like, they can save it and reference back to it next time.

## Code Snippet

This was by far the code snippet that I'm proud of. I had a lot of trouble trying to figure out how the useState and useEffect hooks so I'm really happy that I was able to get my form to work exactly how I wanted it.

```
const [recipes, setRecipes] = useState({})
const [foodType, setFoodType] = useState("")
const [search, setSearch] = useState("")
  
    useEffect(() => {
      const callApi = async () => {
        const apiKey = `4ff13b14bc14e2d5451fba71d252f5fc`
        const appId = `bd9d80c8` 
        const recipeUrl = `https://api.edamam.com/search?q=${search}&app_id=${appId}&app_key=${apiKey}`
        const res = await fetch(recipeUrl)
        const json = await res.json()
        setRecipes(json)
      }
      callApi()
    }, [search])
  
    const handleSearch = (e) => {
      e.preventDefault()
      setSearch(foodType)
      setFoodType("")
    }
  
    const handleChange = (e) => {
      setFoodType(e.target.value)
    }

    <form onSubmit={handleSearch}>
        <label className="label" htmlFor="Enter Recipe">Enter Recipe:</label>
        <input
            className="input"
            type="text"
            value={foodType}
            onChange={handleChange} 
        />
        <input
            className="search"
            type='submit'
            value='Search' 
        />
    </form>
```