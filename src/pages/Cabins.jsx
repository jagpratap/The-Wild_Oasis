import { useEffect } from "react";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  useEffect(() => {
    getCabins().then((data) => console.log(data));
  }, []);

  return (
    <div>
      <img
        src="https://jtvuscpjmcbebkkbcwvp.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg"
        alt=""
      />
    </div>
  );
}

export default Cabins;
