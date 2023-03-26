import SummaryBox from "./components/SummaryBox"
import TableBody from "./components/Tablebody"
import TableHead from "./components/TableHead"
const API_KEY = import.meta.env.VITE_APP_API_KEY;
import axios from 'axios';
import { useEffect, useState } from "react";

// let persons = []

export default function App() {

  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [ lat, setLat ] = useState('');
  const [ long, setLong ] = useState('');
  const [ state, setState ]  = useState('');;

  useEffect(() => {

    async function fetchData() {
      const result = await axios.get(`https://api.weatherbit.io/v2.0/history/daily?postal_code=20001&country=US&start_date=2023-03-10&end_date=2023-03-25&country=US&key=27d581fd0dc54786b6de493c9da8a89a`)
      setData(result.data.data);
      setLat(result.data.lat)
      setLong(result.data.lon)
      setState(result.data.state_code)
    }
    fetchData()
  }, []);

  const DataList = data.map((item) => {
    return (
      <TableBody
        key={item.datetime}
        date={item.datetime}
        clouds={item.clouds}
        max_temp={item.max_temp}
        min_temp={item.min_temp}

      />
    );
  });

  const filteredData = data.filter(item =>
    item.datetime.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const searchData = filteredData.map(item => (
    <TableBody
      key={item.datetime}
      date={item.datetime}
      clouds={item.clouds}
      max_temp={item.max_temp}
      min_temp={item.min_temp}

    />
  ))




  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <input className="border-4" type="text" placeholder="Search by Date" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
      <div className="flex gap-3">
        <SummaryBox data={lat} label={"latitude"}/>
        <SummaryBox data={long} label={"longitude"}/>
        <SummaryBox data={state} label={"state"}/>

      </div>
      <table className="table-fixed">
        <TableHead />
        <>
          {searchTerm ? searchData : DataList}
        </>
      </table>

    </div>
  )
}


