//components
import InputField from '../pure/InputField';
import Button from '../pure/Button';
import TitleForm from '../pure/TitleForm';

//styles
import '../../styles/css/components/forms/arreglosFormulario.css'

const ArreglosFormulario = () => {

  const handlePruebas = async ()=> {
    console.log('prueba formulario arreglos...');
    // await addProduct();
    // await registrarUsuario('danilo@sss.com', '123456');
  }

  // listenToADocument();

  return (
    <div className='arreglos-formulario-container'>
      
      <TitleForm 
        title={'Personaliza tu arreglo floral'}
        description={'Elige las flores que mas te gusten, nosotros hacemos tu arreglo'}/>
      
      <InputField
        id={'text-area'} 
        placeholder={
          'Cuentame sobre tu idea para un arreglo... 😊'
          }
        textLabel={'Sobre tu ramo o arreglo'}
        type={'text-area'}
      />

      <InputField
      id={'nombre'} 
      placeholder={'A quien contactaremos...'} 
      textLabel={'Nombre'}
      />

      <InputField
      id={'correo'} 
      placeholder={'Tu correo, opcional...'} 
      textLabel={'Correo'}
      />

      <InputField
      id={'telefono'} 
      placeholder={'55-555-555...'} 
      textLabel={'Telefono (WhatsApp)'}
      type={'number'}
      />

      <Button buttonText={'Solicitar propuestas'} typeButton={'primary-button'} onClick={()=>handlePruebas()}/>
    </div>
  );
}

export default ArreglosFormulario;
