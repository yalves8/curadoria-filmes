import { MovieModel } from "src/models/movie/movieModel";
import { urlImage } from "src/services/api";
import "./style/index.scss";
import { HeartTwoTone } from "@ant-design/icons";
import { Progress } from "antd";
import SimpleBar from "simplebar-react";

const twoColors = { "0%": "#108ee9", "100%": "#87d068" };

const CarrosselComponent = (props: any) => {
  return (
    <SimpleBar className="simpleBar">
      <div className="divMovieCarrousel">
        {props.filmes.map((movies: MovieModel) => (
          <div className="image-container">
            <HeartTwoTone twoToneColor="#eb2f96" className="heartLike" />
            <img
              src={urlImage(movies.poster_path)}
              key={movies.id}
              alt="imagem"
              className="imgMovie"
            />
            <Progress
              type="dashboard"
              percent={movies.vote_average * 10}
              strokeColor={twoColors}
              className="rateCircle"
              size={50}
            />
          </div>
        ))}
      </div>
    </SimpleBar>
  );
};
export default CarrosselComponent;
