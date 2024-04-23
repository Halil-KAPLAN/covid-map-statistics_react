import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { getCovidStatsFetch } from "../redux/covidSlice";
import Loading from "./Loading";
import DetailList from "./DetailList";
import Error from "./Error";

const Detail = () => {
  const { countryCode } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCovidStatsFetch(countryCode));
  }, [dispatch, countryCode]);

  const { loading, covidStats, error } = useSelector((state) => state.covid);

  return (
    <>
      <div className="fixed top-16 w-full">
        <div className="flex items-center justify-between gap-3 md:gap-10 px-3 md:px-10 h-10 bg-rose-900 text-slate-100">
          <Link to="/" className="flex items-center gap-2">
            <FaAngleDoubleLeft size={25} />
            Back
          </Link>
        </div>
      </div>
      {error ? (
        <Error errorMsg={error} />
      ) : loading ? (
        <Loading />
      ) : (
        <DetailList covidStats={covidStats} />
      )}
    </>
  );
};

export default Detail;
