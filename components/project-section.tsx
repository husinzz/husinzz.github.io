import Author from "./author";

export interface project {
  name : string,
  description : string,
  author : string,
  job : string,
}

export default function AppPage(props : project) {
  return (
    <section className="h-full grid grid-cols-2">
      <div className="border-r border-black relative flex flex-col  justify-center">
        <div className="self-center w-96">
          <h1 className="text-2xl text-white font-bold pb-2 text-center">
            {props.name}
          </h1>
          <p className="text-justify text-white text-xl">
            {props.description}
          </p>
        </div>
        <Author name={props.author} job={props.job} />
      </div>
      <div className="border-l border-black flex flex-row justify-center">
        <img className="self-center" src="/images/mockup.png" alt="mockup" width={710} height={520} />
      </div>
    </section>
  );
}
