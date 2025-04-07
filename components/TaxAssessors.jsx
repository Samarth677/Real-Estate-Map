import { useQuery, gql } from '@apollo/client';

const GET_TAX_ASSESSORS = gql`
  query {
    attomTaxAssessors {
      items {
        PropertyAddressFull
        PropertyLatitude
        PropertyLongitude
        ATTOM_ID
        parcel_id
      }
    }
  }
`;

export default function TaxAssessors() {
  const { loading, error, data } = useQuery(GET_TAX_ASSESSORS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>Property Data</h2>
      {data.attomTaxAssessors.items.map((item, index) => (
        <div key={index}>
          <p>{item.PropertyAddressFull}</p>
        </div>
      ))}
    </div>
  );
}
