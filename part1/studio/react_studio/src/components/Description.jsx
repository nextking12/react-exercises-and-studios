import styles from "./Description.module.css";
import React from "react";

const RecipeAuthor = () => {
  const authorLink =
    "https://www.allrecipes.com/lazy-summer-dinner-ideas-7563508";
  const authorPhoto =
    " https://www.allrecipes.com/thmb/cTpFUJS293Eea_zkg_GMm66HU7U=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/keaton-larson-694d1bcbe83142179b37ad35c745ebe9.jpg";
  const authorName = "Keaton Larson";

  return (
    <div className={styles.recipeAuthorBlock}>
      <img
        src={authorPhoto}
        alt="Reasonable alt text"
        className={styles.imageUpdates}
      />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}>Blog name</a>
      </div>
    </div>
  );
};

class RecipeDesciption extends React.Component {
    render() {
       return(
        <div> 
        <div>
           <h1>Recipe Title</h1>
           <p>Short recipe description</p>
        </div>
        <RecipeAuthor />
     </div>
       );
    }
 }
 export default RecipeDesciption;