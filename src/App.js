import "./styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Autocomplete, Box, Chip, Paper, TextField } from "@mui/material";

export default function App() {
  const carouselSettings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  const titles = [
    { title: "Title 1", year: 2001 },
    { title: "Title 2", year: 2002 },
    { title: "Title 3", year: 2003 },
    { title: "Title 4", year: 2004 },
    { title: "Title 5", year: 2005 }
  ];

  const filterColumns = [
    {
      id: "filter_1",
      label: "Filter 1"
    },
    {
      id: "filter_2",
      label: "Filter 2"
    },
    {
      id: "filter_3",
      label: "Filter 3"
    },
    {
      id: "filter_4",
      label: "Filter 4"
    },
    {
      id: "filter_5",
      label: "Filter 5"
    }
  ];

  return (
    <center className="container">
      <h2>Carousel with MUI Autocomplete</h2>
      <Paper id="modulePaper">
        <Box id="moduleBoxFilters">
          <div id="moduleDivFilters">
            <Slider {...carouselSettings}>
              {filterColumns.map((column, index) => (
                <Autocomplete
                  multiple
                  id={column.id}
                  options={titles.map((option) => option.title)}
                  defaultValue={[titles[index].title]}
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <Chip
                        {...getTagProps({ index })}
                        id="moduleChipFilters"
                        label={option}
                        variant="outlined"
                      />
                    ))
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      color="primary"
                      label={column.label}
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "4px",
                        padding: "4px",
                        width: "250px"
                      }}
                      variant="standard"
                    />
                  )}
                />
              ))}
            </Slider>
          </div>
        </Box>
      </Paper>
      <div className="signature">By 3Hs</div>
    </center>
  );
}
