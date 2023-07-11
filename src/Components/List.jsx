import Card from "./Card";

export default function List() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-4">
          <Card content="primo" changeable={true} />
        </div>
        <div className="col-12 col-md-4">
          <Card content="secondo" changeable={false} />
        </div>
        <div className="col-12 col-md-4">
          <Card content="terzo" changeable={true} />
        </div>
      </div>
    </div>
  );
}
