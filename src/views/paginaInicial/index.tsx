import { Avatar, Card, Carousel } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieModel } from "src/models/movie/movieModel";
import { useAppSelector, useAppDispatch } from "src/redux/hooks";
import { tmdbRequest, urlImage } from "src/services/api";
import { listNowPlayingMovie } from "src/services/movieService";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import "./style/index.scss";
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
  HeartTwoTone,
} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";

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
    <>
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
    </>
  );
};
export default PaginaInicial;
