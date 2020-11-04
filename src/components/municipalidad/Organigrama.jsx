import React, { Suspense } from 'react';
import stylesFile from '../../assets/styles/Organigrama.module.css';

const Tree = React.lazy(() => import('react-d3-tree'));

const Organigrama = () => {

  const myTreeData = [
    {
      name: 'Alcaldesa',
      attributes: {
        'En el Cargo': 'Margarita Osorio Pizarro',

      },
      children: [
        {
          name: 'TRIBUNAL DE POLICIA LOCAL',
          attributes: {
            Juez: 'Alvaro Escobar V.',
          },
        },
        {
          name: '',

          children: [
            {
              name: 'Asesoria Juridica',
              attributes: {
                Director: 'Alejandro Borbarán F.',
              },
              children: [
                {
                  name: 'Unidad de Movilización',
                },
              ],
            },
            {
              name: 'SECPLAN',
              attributes: {
                Director: 'Sergio Herrera B.',
              },
              children: [
                {
                  name: 'Programa de Desarrollo Local (PRODESAL)',
                },
                {
                  name: 'Fomento Productivo y Turismo',
                },
                {
                  name: 'Unidad de Medio Ambiente',
                },
              ],
            },
            {
              name: 'Secretaría Municipal',
              attributes: {
                Directora: 'Viviana García G.',
              },
              children: [
                {
                  name: 'Programa de Desarrollo Local (PRODESAL)',
                },
              ],
            },
            {
              name: 'Dirección Administración y Finanzas',
              attributes: {
                Directora: 'Leslie Salinas M.',
              },
              children: [
                {
                  name: 'Departamento de Personal',
                },
                {
                  name: 'Tesorería',
                },
                {
                  name: 'Unidad de Rentas Patentes e Inscripciones',
                },
                {
                  name: 'Adquisiciones',
                },
                {
                  name: 'Informática',
                },
                {
                  name: 'Finanzas Contabilidad y Presupuestos',
                },
                {
                  name: 'Oficina de Habilitado',
                },
              ],
            },
            {
              name: 'Dirección Desarrollo Comunitario',
              attributes: {
                Directora: 'Karen Pichunante C.',
              },
              children: [
                {
                  name: 'Departamento de Desarrollo Social',
                },
                {
                  name: 'Oficina Organizaciones Comunitarias',
                },
                {
                  name: 'Oficina Gestión Habitacional',
                },
                {
                  name: 'Oficina Grupos Prioritarios',
                },
                {
                  name: 'Oficina Deportes y Recreacion',
                },
                {
                  name: 'Oficina Extisión Cultural',
                },
                {
                  name: 'Oficina Municipal de Intermediación Laboral (OMIL)',
                },
              ],
            },
            {
              name: 'Dirección Control Interno',
              attributes: {
                Director: 'Ernesto Quiroga N.',
              },
            },

            {
              name: 'Dirección Obras Municipales',
              attributes: {
                Director: 'Victor Tapia V.',
              },
              children: [
                {
                  name: 'Oficina de Urbanismo',
                },
                {
                  name: 'Oficina de Inspección',
                },
                {
                  name: 'Oficina de Aseo y Ornato',
                },
              ],
            },
            {
              name: 'Departamento Transito',
              attributes: {
                Directora: 'Scarlet Torres M.',
              },
            },
            {
              name: 'Unidad Agua Potable',
              attributes: {
                Director: 'Juan Suarez T.',
              },
              children: [
                {
                  name: 'Oficina de Emergencias',
                },
              ],
            },
            {
              name: 'Unidad Gabinete',
              attributes: {
                Directora: 'Paola Moya C.',
              },
              children: [
                {
                  name: 'Relaciones Públicas',
                },
              ],
            },
            {
              name: 'Departamento Salud',
              attributes: {
                Directora: 'Paola Moya C.',
              },
            },
            {
              name: 'Departamento Educación',
              attributes: {
                Director: 'Hernán Alarcón Fernández',
              },
            },
          ],
        },
        {
          name: 'Concejo Municipal',
          attributes: {
            Concejal1: 'JUAN FLORES OLIVARES',
            Concejal2: 'JUAN RIVERA ROJAS',
            Concejal3: 'EDUARDO BUENO NAVARRO',
            Concejal4: 'JOHAO MARCHANT VALENZUELA',
            Concejal5: 'FERDINAND GACHÓN JEREZ',
            Concejal6: 'JAIME LINEROS DÍAZ',

          },
        },
      ],
    },
  ];

  const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
  };

  const translation = {
    x: '900',
    y: '20',
  };
  const textalign = {
    textAnchor: 'start', x: 0, y: 20, transform: 'rotate(30)'
    ,
  };
  const separation = {
    siblings: 2,
    nonSiblings: 1,
  };
  return (
    <div id={stylesFile.treeWrapper}>
      <Suspense fallback={<div>Cargando...</div>}>

        <Tree
          className={stylesFile.tree}
          data={myTreeData}
          useCollapseData={true}
          orientation='vertical'
          translate={translation}
          styles={styles}
          pathFunc='step'
          separation={separation}
          textLayout={textalign}

        />
      </Suspense>

    </div>
  );
};
export default Organigrama;
