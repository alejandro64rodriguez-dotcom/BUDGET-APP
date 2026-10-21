import { useState } from "react"
import { services, type Service } from "@/types/service"
import ServiceCard from "@/components/serviceCard"

function ServiceSelector(){
 const [selectedServices, setSelectedServices]= useState<Service[]>([])
 
 const [languages, setLanguages] = useState(0)
 const [pages, setPages] = useState(1)
  function addService(service: Service): void {
  setSelectedServices((previousServices) => {
   if (previousServices.some((item ) => item.id === service.id)) {
    return previousServices.filter((item) => item.id !== service.id)
   } else {
    return[...previousServices, service]
   }
  });
}
return (
  <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
    {services.map((service) => {
      const isSelected = selectedServices.some((item)=> item.id === service.id)
      return (
       <ServiceCard
       key={service.id}
       isSelected={isSelected}
       onToggle={() => addService(service)}
       service={service}
       pages={pages}
       languages={languages}
       setLanguages={setLanguages}
       setPages={setPages}
     />
      );
    })} 
  </div>
);
}
export default ServiceSelector