import CustomerCard from 'components/CustomerCard/CustomerCard';
import { dataExample } from 'components/CustomerList/sampleData';
import { Text, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { IDistributor } from 'utils/interfaces/distributors.interface';

interface Props {}

const DistributorList = (props: Props) => {
  const [distributors, setDistributors] = useState<IDistributor[]>([] as IDistributor[]);
  useEffect(() => {
    setDistributors(dataExample)
  }, []);
  return (
    <View style={{ width: '100%', marginTop: 20 }}>
      {distributors.map((distributor) => (
        <React.Fragment key={distributor.id}>
          <CustomerCard customer={distributor} />
        </React.Fragment>
      ))}
    </View>
  );
};

export default DistributorList;
