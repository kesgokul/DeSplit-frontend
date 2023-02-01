export default function (props) {
  return (
    <div className="px-2 pt-4 min-w-min sm:w-4/6 bg-slate-200 border-4 border-emerald-200 rounded-xl  text-black lg:min-w-max">
      {props.children}
    </div>
  );
}
