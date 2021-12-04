
interface author {
  name : string,
  job : string,
}

export default function Author(props : author) {
  return (
    <div className="absolute bottom-8 left-10 flex">
      <img src="https://placeholder.pics/svg/60" className="rounded-full" />
      <div className="pl-2">
        <p className="text-white">{props.name}</p>
        <p className="text-white">{props.job}</p>
      </div>
    </div>
  );
}
