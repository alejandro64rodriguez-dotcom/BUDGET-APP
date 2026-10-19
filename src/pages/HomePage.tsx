import { useState } from "react"
import { services, type Service } from "@/types/service"

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
  <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
    {services.map((service) => {
      return (
        <div 
        key={service.id}
        className='w-full rounded-lg border p-4 text-left'
         ><div className='flex justify-between'>
          {service.name}
          <p>{service.price} €</p>
          <input type='checkbox' />
          </div>
        </div>
      );
    })} 
  </div>
);
}
export default ServiceSelector