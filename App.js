import { StyleSheet, Text, View } from "react-native";
import { Router, Route, Link } from "./react-router";

// Components
import Home from "./src/Pages/Home/Home";
import Resident from "./src/Pages/Residents/Resident";

const App = () => (
  <Router>
    <View style={styles.container}>
      <View style={styles.nav}>
        <Link to="/">
          <Text>Home</Text>
        </Link>
        <Link to="/resident">
          <Text>Resident</Text>
        </Link>
      </View>

      <Route exact path="/" component={Home} />
      <Route path="/resident" component={Resident} />
    </View>
  </Router>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default App;
