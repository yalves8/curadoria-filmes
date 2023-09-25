import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "src/redux/hooks";
import {
  listPopularMovies,
  listTrendingMovie,
} from "src/services/movieService";
import "simplebar-react/dist/simplebar.min.css";
import "./style/index.scss";
import { FireOutlined } from "@ant-design/icons";
import { Segmented, Space, Typography } from "antd";
import CarrosselComponent from "src/components/carrosselFilmes";
import { SegmentedValue } from "antd/es/segmented";
const { Title } = Typography;

const PaginaInicial = () => {
  //Estados Globais
  const movieState = useAppSelector((state: any) => state.movie);

  //Estados Locais
  const [options, setOptions] = useState(["Hoje", "Essa semana"]);
  //Hooks
  const dispatch = useAppDispatch();

  const handleChangeSegmented = async (value: SegmentedValue) => {
    console.log("value", value);
    await dispatch(listTrendingMovie(value.toString()));
  };

  useEffect(() => {
    const currentDate = new Date();
    console.log("cuu", currentDate.toLocaleDateString("en-CA"));
    dispatch(listTrendingMovie("day"));
    dispatch(
      listPopularMovies(
        `&release_date.gte=${currentDate.toLocaleDateString(
          "en-CA"
        )}&release_date.lte=2023-10-01`
      )
    );
  }, [dispatch]);

  return (
    <>
      <Space direction="vertical" size="large" className="spaceNow">
        <div className="titleMovieNow">
          <Title level={2}>
            TENDÊNCIAS{" "}
            <FireOutlined style={{ fontSize: "25px", color: "#F4A84D" }} />
          </Title>
          <Segmented
            options={[
              { label: "Hoje", value: "day" },
              { label: "Essa semana", value: "week" },
            ]}
            defaultValue="day"
            className="segmentedNow"
            onChange={handleChangeSegmented}
          />
        </div>

        <CarrosselComponent filmes={movieState.listMovies} />
        <div className="titleMovieNow">
          <Title level={2}>POPULARES </Title>
        </div>
        <CarrosselComponent filmes={movieState.listPopularMovies} />
      </Space>
    </>
  );
};
export default PaginaInicial;
