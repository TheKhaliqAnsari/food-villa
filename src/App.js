import "./App.css";

const Title = () => {
  return (
    <h1 id="title" key="h1">
      Food Villa
    </h1>
  )
}

const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li> Contact</li>
          <li> Cart</li>
        </ul>
      </div>
    </div>
  )
}


 
function App() {
  return <AppLayout />;
}

const AppLayout = () => {
  return (
    <div>
      {/* 
      Header
        - Logo
        - Nav Items (Right side)
        - Cart
      Body
        - Search Bar
        - RestrauntList
          - Restraurent Card
            - Img
            - Name
            - Rating
            - Cusines
      Footer
        - Links
        - Copyright
      */}

<HeaderComponent />
    </div>
  );
};

export default App;
