import React from "react";
// import MuiSkeleton from "../components/Skeleton";
// import MuiLoaderBtn from "../components/MuiLoaderBtn";
// import MuiTimeline from "../components/MuiTimeline";
// import MuiMasonry from "../components/MuiMasonry";
// import MuiResponsive from "../components/MuiResponsive";
// import MuiDialog from "../components/MuiDialog";
// import MuiProgress from "../components/Progress";
// import MuiSnackbar from "../components/MuiSnackbar";
// import MuiBadge from "../components/MuiBadge";
// import MuiList from "../components/MuiList";
// import MuiChip from "../components/MuiChip";
// import MuiTooltip from "../components/MuiTooltip";
// import MuiTable from "../components/MuiTable";
// import MuiAlert from "../components/MuiAlert";
// import MuiBottomNavigation from "../components/BottomNavigation";
// import MuiAvatar from "../components/MuiAvatar";
// import MuiDrawer from "../components/MuiDrawer";
// import MuiSpeedDail from "../components/MuiSpeedDail";
// import MuiBreadcrumbs from "../components/MuiBreadcrumbs";
// import MuiAccordion from "../components/MuiAccordion";
// import MuiNavbar from "../components/MuiNavbar";
// import MuiMenu from "../components/MuiMenu";
// import MuiLink from "../components/MuiLink";
// import MuiGrid from "../components/MuiGrid";
// import MuiPaper from "../components/MuiPaper";
// import MuiCard from "../components/MuiCard";
// import StandardImageList from "../components/MuiImageList";
// import MuiStack from "../components/MuiStack";
// import MuiLayout from "../components/MuiLayout";
// import MuiRating from "../components/MuiRating";
// import MuiAutoComplate from "../components/MuiAutocomlete";
// import MuiSwitch from "../components/MuiSwitch";
// import MuiCheckbox from "../components/MuiCheckbox";
// import MuiRadioBtn from "../components/MuiRadioBtn";
// import Typography from "../components/Typography";
// import ButtonMaterial from "../components/Button";
// import MuiTextField from "../components/MuiTextField";
// import MuiSelect from "../components/MuiSelect";
import { theme } from "../components/MuiTheme";
import { ThemeProvider } from "@emotion/react";
import MuiPagination from "../components/MuiPagination";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <Typography />*/}
      {/* <ButtonMaterial />*/}
      {/*<MuiTextField />*/}
      <MuiPagination />
    </ThemeProvider>
  );
};

export default App;
