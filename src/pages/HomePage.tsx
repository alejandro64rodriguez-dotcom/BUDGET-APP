import { useState } from "react"
import { services, type Service } from "@/pages/service"

function ServiceSelector(){
 const [selectedServices, setSelectedServices]= useState<Service[]>([])

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
  <div>
    {services.map((service) => {
      return (
        <button key={service.id}
        onClick={() => addService(service)}
        aria-pressed={selectedServices.some(
        (item) => item.id === service.id)}>
          {service.name}
        </button>
      );
    })} 
  </div>
);
}
export default ServiceSelector