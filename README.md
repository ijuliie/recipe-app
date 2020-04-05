<<<<<<< HEAD
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
=======
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
>>>>>>> 4bca6c67de9c99cd62eb5949b0e94f7345c9a7dd
