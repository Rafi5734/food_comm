import { useEffect, useState } from "react";

const useItemDetails = (serviceId) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/food/${serviceId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [serviceId]);
  return [item];
};

export default useItemDetails;
