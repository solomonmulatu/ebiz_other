import React, {
    useEffect,
    useState
} from 'react'
import logo from "./logo.svg";
import "./App.css";
import ApiBody from "./apiBody.component";

function App() {

    const [apiData, setApiData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)
    const indexofLastPost = currentPage * postsPerPage;
    const indexofFirstPost = indexofLastPost - postsPerPage;
    const currentPosts = apiData.slice(indexofFirstPost, indexofLastPost)
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(apiData.length / postsPerPage); i++) {
        pageNumbers.push(i)

    }


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setApiData(json))
            .then(console.log("api data is" + apiData))
    }, [])

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id))
    }

    const renderPosts = currentPosts.map((post, index) => {
        return ( <
            ApiBody post = { post }
            />
        )

    })
    const renderPagination = pageNumbers.map(number => {
        return ( < list key = { number }
            id = { number }
            onClick = {
                (event) => {
                    handleClick(event)
                }
            } > { number } < /list>
        )
    })

    return ( <
        div className = "App" >



        {
            renderPosts
            /* <
            ApiBody posts = { apiData }
            /> */
        }

        {
            renderPagination
        }


        <
        /div>
    );
}

export default App;