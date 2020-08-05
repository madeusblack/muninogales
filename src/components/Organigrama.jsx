import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import '../assets/styles/Organigrama.scss'
import Alcaldesa from '../assets/static/mosorio.jpg';

const Organigrama = () => (
  <Tree className='organigrama' label={(
    <div>
      <img className='imagenorganigrama' src={Alcaldesa} alt='' />
      <h6>Alcaldesa: Margarita Osorio</h6>
    </div>
  )}
  >
    <TreeNode label={<div>Tribunal de Policia Local</div>} />
    <TreeNode label={<div></div>} >
      <TreeNode label={<div>Asesoria Juridica</div>} >
        <TreeNode label={<div>Unidad de Movilización</div>} />
      </TreeNode>
      <TreeNode label={<div>SECPLAN</div>} >
        <TreeNode label={<div>Programa de Desarrollo Local (PRODESAL)</div>} />
        <TreeNode label={<div>Fomento Productivo y Turismo</div>} />
        <TreeNode label={<div>Unidad de Medio Ambiente</div>} />
      </TreeNode>
      <TreeNode label={<div>Secretaría Municipal</div>}>
        <TreeNode label={<div>Oficina de Partes</div>} />
      </TreeNode>
      <TreeNode label={<div>Dirección Administración y Finanzas</div>}>
        <TreeNode label={<div>Departamento de Personal</div>} />
        <TreeNode label={<div>Tesorería</div>} />
        <TreeNode label={<div>Unidad de Rentas Patentes e Inscripciones</div>} />
        <TreeNode label={<div>Adquisiciones</div>} />
        <TreeNode label={<div>Informática</div>} />
        <TreeNode label={<div>Finanzas Contabilidad y Presupuestos</div>} />
        <TreeNode label={<div>Oficina de Habilitado</div>} />
      </TreeNode>
      <TreeNode label={<div>Dirección Desarrollo Comunitario</div>} >
        <TreeNode label={<div>Departamento de Desarrollo Social</div>} />
        <TreeNode label={<div>Oficina Organizaciones Comunitarias</div>} />
        <TreeNode label={<div>Oficina Gestión Habitacional</div>} />
        <TreeNode label={<div>Oficina Grupos Prioritarios</div>} />
        <TreeNode label={<div>Oficina Deportes y Recreacion</div>} />
        <TreeNode label={<div>Oficina Extisión Cultural</div>} />
        <TreeNode label={<div>Oficina Municipal de Intermediación Laboral (OMIL)</div>} />
      </TreeNode>
      <TreeNode label={<div>Dirección Control Interno</div>} />
      <TreeNode label={<div>Dirección Obras Municipales</div>}>
        <TreeNode label={<div>Oficina de Urbanismo</div>} />
        <TreeNode label={<div>Oficina de Inspección</div>} />
        <TreeNode label={<div>Oficina de Aseo y Ornato</div>} />
      </TreeNode>
      <TreeNode label={<div>Departamento Transito</div>} />
      <TreeNode label={<div>Unidad Agua Potable</div>} />
      <TreeNode label={<div>Unidad Gabinete</div>} />
      <TreeNode label={<div>Departamento Salud</div>} />
    </TreeNode>
    <TreeNode label={<div>Concejo Municipal</div>} />
  </Tree>
);
export default Organigrama;
