import Button from "../Button/Button"

const Detail = ({title, heading, Content, btn}) => {
  return (
    <div className="flex items-center text-center md:text-left">
    <div className="space-y-4">
      <h2 className="text-blue-800 uppercase font-medium">
        {title}
      </h2>
      <div className="text-gray-800 font-bold text-xl xl:text-6xl  md:text-xl space-y-2">
        <h2 className="text-wrap">{heading}</h2>
      
      </div>
      <p className="font-medium text-gray-500">
        {Content}
      </p>
      <Button>{btn}</Button>
    </div>
  </div>
  )
}

export default Detail