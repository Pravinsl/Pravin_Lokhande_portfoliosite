// // pages/services.js
// import React from 'react';
// import styles from './ServicePage.module.css';
// import Image from 'next/image';

// export default function Services() {
//   const services = [
//     { name: 'WordPress', color: '#fdb813', icon: '/icons/wordpress.png' },
//     { name: 'Node.js', color: '#fdb813', icon: '/icons/nodejs.png' },
//     { name: 'Codeigniter', color: '#ff5722', icon: '/icons/codeigniter.png' },
//     { name: 'Magento', color: '#f44336', icon: '/icons/magento.png' },
//     { name: 'Laravel', color: '#ff9800', icon: '/icons/laravel.png' },
//     { name: 'React.js', color: '#00bcd4', icon: '/icons/react.png' },
//     { name: 'Shopify', color: '#009688', icon: '/icons/shopify.png' },
//     { name: 'Cake PHP', color: '#3f51b5', icon: '/icons/cakephp.png' },
//   ];

//   return (
//     <div className={styles.container}>
//       <div className={styles.circle}>
//         <div className={styles.center}>Web<br />Development<br />Services</div>
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className={styles.item}
//             style={{
//               transform: `rotate(${index * 45}deg) translate(180px) rotate(-${index * 45}deg)`,
//               backgroundColor: service.color,
//             }}
//           >
//             <div className={styles.content}>
//               <Image src={service.icon} alt={service.name} width={30} height={30} />
//               <span>{service.name}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// pages/index.js or app/page.js
// import styles from './ServicePage.module.css';

// export default function ServicesPage() {
//   const services = [
//     { name: 'WordPress', icon: '📝', color: 'wordpress', position: 'top' },
//     { name: 'Node.js', icon: '⬢', color: 'nodejs', position: 'top-right' },
//     { name: 'CodeIgniter', icon: '🔥', color: 'codeigniter', position: 'right' },
//     { name: 'Magento', icon: '🏪', color: 'magento', position: 'bottom-right' },
//     { name: 'Laravel', icon: '🎯', color: 'laravel', position: 'bottom' },
//     { name: 'React.js', icon: '⚛️', color: 'react', position: 'bottom-left' },
//     { name: 'Shopify', icon: '🛍️', color: 'shopify', position: 'left' },
//     { name: 'Cake PHP', icon: '🍰', color: 'cakephp', position: 'top-left' }
//   ];

//   return (
//     <div className={styles.container}>
//       <div className={styles.servicesWrapper}>
//         <div className={styles.centralHub}>
//           <h1 className={styles.title}>Web Development Services</h1>
//         </div>
        
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className={`${styles.serviceCard} ${styles[service.color]} ${styles[service.position]}`}
//           >
//             <div className={styles.serviceContent}>
//               <span className={styles.serviceIcon}>{service.icon}</span>
//               <span className={styles.serviceName}>{service.name}</span>
//             </div>
//           </div>
//         ))}

//         {/* Connection lines */}
//         <div className={styles.connectionLines}>
//           {Array.from({ length: 8 }, (_, i) => (
//             <div key={i} className={`${styles.line} ${styles[`line${i + 1}`]}`}></div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
// pages/index.js or app/page.js
import styles from './ServicePage.module.css';

export default function ServicesPage() {
  const services = [
    { name: 'WordPress', icon: '📝', color: 'wordpress' },
    { name: 'Node.js', icon: '⬢', color: 'nodejs' },
    { name: 'CodeIgniter', icon: '🔥', color: 'codeigniter' },
    { name: 'Magento', icon: '🏪', color: 'magento' },
    { name: 'Laravel', icon: '🎯', color: 'laravel' },
    { name: 'React.js', icon: '⚛️', color: 'react' },
    { name: 'Shopify', icon: '🛍️', color: 'shopify' },
    { name: 'Cake PHP', icon: '🍰', color: 'cakephp' }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.servicesWrapper}>
        <div className={styles.centralHub}>
          <h1 className={styles.title}>Web Development Services</h1>
        </div>
        
        {services.map((service, index) => (
          <div
            key={index}
            className={`${styles.serviceCard} ${styles[service.color]}`}
          >
            <div className={styles.serviceContent}>
              <span className={styles.serviceIcon}>{service.icon}</span>
              <span className={styles.serviceName}>{service.name}</span>
            </div>
          </div>
        ))}

        {/* Animated connection lines */}
        <div className={styles.connectionLines}>
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className={`${styles.line} ${styles[`line${i + 1}`]}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
}