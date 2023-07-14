import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
interface IPropsSideBar {
  title: string;
  options: string[];
  type?: string;
}
export default function SideOptions(props: IPropsSideBar) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className="w-[240px]"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className="font-semibold">{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {props.type
            ? props.options.map((item) => (
                <Typography key={item} className="">
                  <input type={props.type} />
                  {item}
                </Typography>
              ))
            : props.options.map((item) => (
                <Typography key={item} className="">
                  {item}
                </Typography>
              ))}
          <Typography className="">
            <Link href="/" className="text-blue-500">
              See all
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
