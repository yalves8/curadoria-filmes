import { MovieModel } from "src/models/movie/movieModel";
import { urlImage } from "src/services/api";
import "./style/index.scss";
import {
  EllipsisOutlined,
  HeartTwoTone,
  InfoCircleOutlined,
  PlusOutlined,
  SmallDashOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Menu, Progress } from "antd";
import SimpleBar from "simplebar-react";
import { addFavorite } from "src/services/movieService";
import { useAppDispatch } from "src/redux/hooks";

const twoColors = { "0%": "#108ee9", "100%": "#87d068" };

const CarrosselComponent = (props: any) => {
  //Hooks
  const dispatch = useAppDispatch();

  const menu = (value: MovieModel) => (
    <Menu>
      <Menu.Item
        key="1"
        icon={<HeartTwoTone />}
        onClick={async () => {
          console.log("value", value);
          await dispatch(addFavorite(value.id));
        }}
      >
        Adicionar aos favoritos
      </Menu.Item>
      <Menu.Item
        key="2"
        icon={<PlusOutlined />}
        //onClick={() => goDeletar(value)}
      >
        Adicionar a "ver depois"
      </Menu.Item>
      <Menu.Item
        key="3"
        icon={<StarOutlined />}
        //onClick={() => goDeletar(value)}
      >
        Avaliar
      </Menu.Item>
    </Menu>
  );
  return (
    <SimpleBar className="simpleBar">
      <div className="divMovieCarrousel">
        {props.filmes.map((movies: MovieModel) => (
          <div className="image-container">
            <Dropdown dropdownRender={() => menu(movies)} className="heartLike">
              <InfoCircleOutlined className="infoCircle" />
            </Dropdown>
            <img
              src={urlImage(movies.poster_path)}
              key={movies.id}
              alt="imagem"
              className="imgMovie"
            />
            <Progress
              type="dashboard"
              percent={parseFloat((movies.vote_average * 10).toFixed(0))}
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
