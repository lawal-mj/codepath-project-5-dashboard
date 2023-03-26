export default function SummaryBox(props){
  return (
    <div className="w-60 h-40 bg-yellow-100 rounded-md flex items-center justify-center flex-col">
      <p>{props.label}</p>

      <p className="font-bold text-2xl">{props.data}</p>
    </div>
  )
}