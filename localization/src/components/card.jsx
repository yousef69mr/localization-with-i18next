import logo from "../logo.svg";
//import useFetch from "../services/useFetch.jsx";
//import {baseUrl} from '../index';

const InfoCard = () => {


    //const {data,loading,error} = useFetch(`${baseUrl}user`);
    //console.log(data,loading,error);
  return (
    <div className="container border">
      <div className="row">
        <div className="col-3">
          <div className="image w-100 h-100">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="col-9">
          <div className="details container">
            <div className="row">
              <div className="col-11 ">
                <h1>Giza Governorate</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  provident aliquam sapiente sequi voluptate et, rerum nisi.
                  Veritatis quas perferendis totam commodi iure dolores cum,
                  repellendus alias inventore in id? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Necessitatibus eos nemo dolores
                  eligendi excepturi ullam similique porro consequatur vel
                  magnam deleniti nobis facilis autem architecto ducimus, beatae
                  rem minus ipsum?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
