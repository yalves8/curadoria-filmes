import { useEffect, useState } from "react";
import { MovieModel } from "src/models/movie/movieModel";
import { useAppSelector, useAppDispatch } from "src/redux/hooks";
import { urlImage } from "src/services/api";
import {
  listNowPlayingMovie,
  listPopularMovies,
} from "src/services/movieService";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import "./style/index.scss";
import {
  FireOutlined,
  FrownOutlined,
  HeartTwoTone,
  MehOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Progress, Radio, Rate, Segmented, Space, Typography } from "antd";
import CarrosselComponent from "src/components/carrosselFilmes";
const { Title } = Typography;

const PaginaInicial = () => {
  //Estados Globais
  const movieState = useAppSelector((state: any) => state.movie);

  //Estados Locais
  const [options, setOptions] = useState(["Hoje", "Essa semana"]);
  //Hooks
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(listNowPlayingMovie());
    dispatch(listPopularMovies());
  }, [dispatch]);

  return (
    <>
      <Space direction="vertical" size="large" className="spaceNow">
        <div className="titleMovieNow">
          <Title level={2}>
            LANÇAMENTOS{" "}
            <FireOutlined style={{ fontSize: "25px", color: "#F4A84D" }} />
          </Title>
          <Segmented options={options} className="segmentedNow" />
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
