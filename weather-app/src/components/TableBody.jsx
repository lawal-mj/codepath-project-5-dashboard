export default function TableBody(props) {
  return (
    <>
      <tr>
        <td>{props.date}</td>
        <td>{props.max_temp}</td>
        <td>{props.min_temp}</td>
        <td>{props.clouds}</td>
      </tr>
    </>)
}
