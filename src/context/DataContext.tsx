import {
  createContext,
  ReactElement,
  useState,
  useEffect,
  SetStateAction,
} from "react";

type ChildrenType = { children?: ReactElement | ReactElement[] };
type Categories = {
  categoryName: string;
  categoryLink: string;
};

export type CategoryProps = {
  link: string[] | null;
  setLink: React.Dispatch<SetStateAction<string[] | null>>;
  categoryData: string[] | string | null;
  setCategoryData: React.Dispatch<SetStateAction<string[] | string | null>>;
  recipeLink: string | null;
  setRecipeLink: React.Dispatch<SetStateAction<string | null>>;
  recipeData: string[] | null;
  setRecipeData: React.Dispatch<SetStateAction<string[] | null>>;
  recipeIngredients: string[][] | null;
  setRecipeIngredients: React.Dispatch<SetStateAction<string[][] | null>>;
  recipeEmbedID: string | null;
  setRecipeEmbedID: React.Dispatch<SetStateAction<string | null>>;
  categories:Categories[] | null;
};
const categoryProps: CategoryProps = {
  link: null,
  setLink: () => undefined,
  categoryData: null,
  setCategoryData: () => undefined,
  recipeLink: null,
  setRecipeLink: () => undefined,
  recipeData: null,
  setRecipeData: () => undefined,
  recipeIngredients: null,
  setRecipeIngredients: () => undefined,
  recipeEmbedID: null,
  setRecipeEmbedID: () => undefined,
  categories:null
};

export const DataContext = createContext<CategoryProps>(categoryProps);

export const DataProvider = ({ children }: ChildrenType): ReactElement => {
  const categories = [
    {
      categoryName: "Beef",
      categoryLink: "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef",
    },
    {
      categoryName: "Chicken",
      categoryLink:
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken",
    },
    {
      categoryName: "Dessert",
      categoryLink:
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert",
    },
    {
      categoryName: "Lamb",
      categoryLink: "https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb",
    },
    {
      categoryName: "Miscellaneous",
      categoryLink:
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Miscellaneous",
    },
    {
      categoryName: "Pasta",
      categoryLink:
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta",
    },
    {
      categoryName: "Pork",
      categoryLink: "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork",
    },
    {
      categoryName: "Seafood",
      categoryLink:
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood",
    },
    {
      categoryName: "Side",
      categoryLink: "https://www.themealdb.com/api/json/v1/1/filter.php?c=Side",
    },
    {
      categoryName: "Starter",
      categoryLink:
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Starter",
    },
    {
      categoryName: "Vegan",
      categoryLink:
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan",
    },
    {
      categoryName: "Vegetarian",
      categoryLink:
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian",
    },
    {
      categoryName: "Breakfast",
      categoryLink:
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast",
    },
    {
      categoryName: "Goat",
      categoryLink: "https://www.themealdb.com/api/json/v1/1/filter.php?c=Goat",
    },
  ];
  const [link, setLink] = useState<string[] | null>(null);
  const [categoryData, setCategoryData] = useState<string[] | string | null>(
    []
  );
  const [recipeLink, setRecipeLink] = useState<string | null>(null);
  const [recipeData, setRecipeData] = useState<string[] | null>([]);
  const [recipeIngredients, setRecipeIngredients] = useState<string[][] | null>(
    []
  );
  const [recipeEmbedID, setRecipeEmbedID] = useState<string | null>("");

  useEffect(() => {
    const apiRequest = async (): Promise<string | null> => {
      const data = await fetch(link![1]).then((response) => {
        return response.json();
      });
      return data.meals;
    };
    apiRequest().then(
      (categories) => setCategoryData(categories) as unknown as string
    );
  }, [link]);

  useEffect(() => {
    const apiRequest = async (): Promise<string[] | null> => {
      const data = await fetch(recipeLink!).then((response) => {
        return response.json();
      });
      return data.meals[0];
    };
    apiRequest().then((recipe) => setRecipeData(recipe) as unknown as string[]);
  }, [recipeLink]);

  useEffect(() => {
    const recipeDumy: string[][] = [];
    let measureIndex = 0;
    Object.entries(recipeData as string[]).map((value) => {
      if (value[1] != null) {
        if (value[0].includes("strIngredient") && value[1].length > 1) {
          return recipeDumy.push(["", value[1]]);
        }
      }
      if (
        value[0].includes("strMeasure") &&
        value[1] != "" &&
        recipeDumy.length > 1 &&
        recipeDumy.length > measureIndex
      ) {
        measureIndex++;
        return (recipeDumy[measureIndex - 1][0] = value[1]);
      }
    });
    setRecipeIngredients(recipeDumy);
    let recipeVideo:string[]=[]
    if(recipeData){
      recipeVideo=[...Object.values(recipeData)]
    }
    if (recipeVideo[8]) {
      setRecipeEmbedID(
        "https://www.youtube.com/embed/" +
          recipeVideo[8]
            .toString()
            .slice(32, recipeVideo[8].length )+ "")
      
    }else{
      setRecipeEmbedID(
        "https://www.youtube.com/embed/")
    }
  }, [recipeData]);
  
  return (
    <DataContext.Provider
      value={{
        link,
        setLink,
        categoryData,
        setCategoryData,
        recipeLink,
        setRecipeLink,
        recipeData,
        setRecipeData,
        recipeIngredients,
        setRecipeIngredients,
        recipeEmbedID,
        setRecipeEmbedID,
        categories,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
