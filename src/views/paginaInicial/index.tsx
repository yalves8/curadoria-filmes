import { useEffect } from "react";
import { MovieModel } from "src/models/movie/movieModel";
import { useAppSelector, useAppDispatch } from "src/redux/hooks";
import { urlImage } from "src/services/api";
import { listNowPlayingMovie } from "src/services/movieService";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import "./style/index.scss";
import { FireOutlined, HeartTwoTone } from "@ant-design/icons";
import { Radio, Space, Typography } from "antd";
const { Title } = Typography;

const PaginaInicial = () => {
  //Estados Globais
  const movieState = useAppSelector((state: any) => state.movie);
  //Hooks
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(listNowPlayingMovie());
    //tmdbRequest("movie/now_playing");
  }, [dispatch]);
  return (
    <Space direction="vertical" size="large" className="spaceNow">
      <div className="titleMovieNow">
        <Title level={2}>
          Tendências{" "}
          <FireOutlined style={{ fontSize: "25px", color: "#F4A84D" }} />
        </Title>
        <Radio.Group
          //onChange={handleModeChange}
          //value={mode}
          //style={{ marginBottom: 8 }}
          className="radioButtonNow"
        >
          <Radio.Button value="hoje" className="radioHoje">
            Hoje
          </Radio.Button>
          <Radio.Button value="semana" className="radioSemana">
            Essa semana
          </Radio.Button>
        </Radio.Group>
      </div>

      <SimpleBar className="simpleBar">
        <div className="divMovieCarrousel">
          {movieState.listMovies.map((movies: MovieModel) => (
            <div className="image-container">
              <HeartTwoTone twoToneColor="#eb2f96" className="heartLike" />
              <img
                src={urlImage(movies.poster_path)}
                key={movies.id}
                alt="imagem"
                className="imgMovie"
              />
            </div>
          ))}
        </div>
      </SimpleBar>
    </Space>
  );
};
export default PaginaInicial;
