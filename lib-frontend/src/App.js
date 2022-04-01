import NewBook from "./containers/NewBook";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SearchBook from "./containers/SearchBook";
import HomeBooks from "./containers/HomeBooks";
import NewAuthor from "./containers/NewAuthor";
import Home from "./containers/Home";
import UpdateBook from "./containers/UpdateBook";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Author from "./containers/Author";
import UpdateAuthor from "./containers/UpdateAuthor";
import SingleAuthor from "./containers/SingleAuthor";
import { Box } from "@mui/material";
import DetailsMain from "./containers/Details/Main";

/* 
route: "/author/new", name: "New Author" },
    { route: "/book/new", name: "New Book" },
    { route: "/book/search", name: "Search Book" },
    { route: "/book", name: "Books" },
    { route: "/author", name: "Author" },
*/

function App() {
  //  /* /622e486333f446f03bb5ddbf */
  const routes = [
    { route: "/", name: "Mybrary" },
    { route: "/book", name: "Books" },
    { route: "/author", name: "Author" },
    { route: "/book/new", name: "New Book" },
    { route: "/book/search", name: "Search Book" },
  ];

  const menu = [
    { route: "", name: "Profile" },
    { route: "", name: "Config" },
    { route: "", name: "Logout" },
  ];

  return (
    <div
      className="App"
      style={{
        background: "#e1dcc5",
      }}
    >
      <Box
        sx={{
          height: "33px",
          width: "100%",
          background: "black",
        }}
      />
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#e1dcc5",
        }}
      >
        <CssBaseline />

        <Navbar routes={routes} menuItems={menu} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/author/new" element={<NewAuthor />} />
          <Route path="/book/new" element={<NewBook />} />
          <Route path="/book/search" element={<SearchBook />} />
          <Route path="/book" element={<HomeBooks />} />
          <Route path="/book/:bookId" element={<DetailsMain />}></Route>
          <Route path="book/update/:id" element={<UpdateBook />}></Route>
          <Route path="author" element={<Author />}></Route>
          <Route path="/author/:id" element={<SingleAuthor />}></Route>
          <Route path="/author/update/:id" element={<UpdateAuthor />}></Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Container>
    </div>
  );

  /*
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ required: true, default: Date.now() })
  publishDate: Date;

  @Prop({ required: true })
  pageCount: number;

  @Prop({ required: true, default: Date.now() })
  createdAt: Date;

  @Prop({ required: true })
  coverImageName: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: 'true',
  })
  author: Author;
  */
}

export default App;
