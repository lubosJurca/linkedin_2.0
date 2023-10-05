// MUI
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => {
    return (
      <article className="flex p-2 cursor-pointer hover:bg-slate-100 rounded">
        <div className="text-[#0177b7] mr-1">
          <FiberManualRecordIcon style={{fontSize: "15px"}} />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-sm">{heading}</h4>
          <p className="text-xs text-gray-400">{subtitle}</p>
        </div>
      </article>
    );
  };

  return (
    <section className="flex-[0.2] sticky top-20 bg-white rounded border h-fit pb-2">
      <div className="flex items-center justify-between p-2">
        <h2 className="text-base font-normal">LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Arsenal UCL Champions", "For the first time in history")}
      {newsArticle("Tottenham got relegated", "Yep, its happening")}
      {newsArticle("Just learned Redux", "Its actually not that bad")}
      {newsArticle("Keep improving", "Next is Next!")}
    </section>
  );
};

export default Widgets;
