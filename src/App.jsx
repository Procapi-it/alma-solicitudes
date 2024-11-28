import { AlmaForm } from "./components/AlmaForm.jsx";
import { Nav } from "../src/components/nav.jsx"
export const App = () => {
    return (
      <>
        <main className="w-100 mb-5">
          <Nav />
          <AlmaForm />
        </main>
      </>
    );
};
