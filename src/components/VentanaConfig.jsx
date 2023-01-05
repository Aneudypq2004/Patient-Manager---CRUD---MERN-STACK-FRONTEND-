import useDash from "../hook/useDash";
import { useEffect } from "react";
import avatar from '../img/avatar.png'


function VentanaConfig() {

    const { configActive, setConfigActive } = useDash()

    useEffect(() => {

        if (configActive) {
            document.body.classList.add('active');

            setTimeout(() => {
                document.querySelector('.modal-config').classList.add('modal-animar')
            }, 500);

        }

    }, [configActive])

    return (
        <div className='modal'>

            <div className="modal-config">
                <div className="modal-config-t">

                    <p className="logo">patient manager</p>

                    <div className="modal-config-icon">

                        <svg width="37" height="33" viewBox="0 0 37 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.4444 18.8223C19.6717 18.8223 20.6667 17.926 20.6667 16.8203C20.6667 15.7147 19.6717 14.8184 18.4444 14.8184C17.2171 14.8184 16.2222 15.7147 16.2222 16.8203C16.2222 17.926 17.2171 18.8223 18.4444 18.8223Z" fill="#231F20" />
                            <path d="M30.7704 13.3102H29.1556C28.9481 13.3102 28.8 13.1634 28.7111 12.9632C28.6582 12.8897 28.63 12.8039 28.63 12.7163C28.63 12.6287 28.6582 12.5429 28.7111 12.4694L29.9111 11.4818C30.1463 11.278 30.3332 11.0333 30.4605 10.7627C30.5878 10.492 30.6529 10.2009 30.6519 9.9069C30.6515 9.61113 30.5859 9.31838 30.4587 9.04571C30.3315 8.77304 30.1454 8.52589 29.9111 8.31868L27.9259 6.49023C27.696 6.28161 27.4225 6.11603 27.1212 6.00304C26.8199 5.89005 26.4967 5.83188 26.1704 5.83188C25.844 5.83188 25.5209 5.89005 25.2196 6.00304C24.9183 6.11603 24.6448 6.28161 24.4148 6.49023L23.2741 7.47786C23.1834 7.53018 23.078 7.55799 22.9704 7.55799C22.8627 7.55799 22.7573 7.53018 22.6667 7.47786C22.5772 7.44781 22.4991 7.39547 22.4414 7.32694C22.3837 7.25841 22.3488 7.17652 22.3407 7.09082V5.71614C22.341 5.13286 22.089 4.57243 21.6381 4.15381C21.1873 3.73518 20.5731 3.49131 19.9259 3.47395H17.0519C16.3904 3.47394 15.7558 3.70975 15.2867 4.12986C14.8176 4.54997 14.5521 5.12025 14.5481 5.71614V7.17089C14.5481 7.35774 14.3852 7.49121 14.163 7.57128C14.0814 7.61897 13.9862 7.64434 13.8889 7.64434C13.7916 7.64434 13.6964 7.61897 13.6148 7.57128L12.5185 6.49023C12.0493 6.07005 11.4171 5.83074 10.7556 5.82291C10.4295 5.82348 10.1069 5.88282 9.80663 5.99742C9.5064 6.11203 9.23467 6.27958 9.00741 6.49023L6.97778 8.27864C6.73943 8.48646 6.5499 8.73534 6.42047 9.01047C6.29103 9.28561 6.22433 9.58138 6.22433 9.8802C6.22433 10.179 6.29103 10.4748 6.42047 10.7499C6.5499 11.0251 6.73943 11.2739 6.97778 11.4818L8.07408 12.4694C8.13215 12.5511 8.16302 12.646 8.16302 12.743C8.16302 12.84 8.13215 12.9349 8.07408 13.0166C8.04072 13.0972 7.98262 13.1676 7.90655 13.2196C7.83049 13.2715 7.73959 13.303 7.64445 13.3102H6.11852C5.45843 13.3102 4.82537 13.5464 4.35861 13.9669C3.89185 14.3874 3.62963 14.9577 3.62963 15.5524V18.0749C3.62962 18.6708 3.89137 19.2425 4.3577 19.6651C4.82404 20.0877 5.45707 20.3269 6.11852 20.3304H7.73333C7.94074 20.3304 8.08889 20.4772 8.17778 20.6774C8.23071 20.7509 8.25887 20.8367 8.25887 20.9243C8.25887 21.0119 8.23071 21.0977 8.17778 21.1712L6.97778 22.1588C6.51136 22.5815 6.24573 23.1511 6.23704 23.7471C6.23653 24.0429 6.30182 24.3359 6.42904 24.6087C6.55626 24.8815 6.74284 25.1285 6.97778 25.3353L8.96296 27.1504C9.19292 27.359 9.46643 27.5246 9.76773 27.6376C10.069 27.7506 10.3922 27.8087 10.7185 27.8087C11.0449 27.8087 11.368 27.7506 11.6693 27.6376C11.9706 27.5246 12.2441 27.359 12.4741 27.1504L13.6148 26.1628C13.7055 26.1104 13.8109 26.0826 13.9185 26.0826C14.0262 26.0826 14.1316 26.1104 14.2222 26.1628C14.3117 26.1928 14.3898 26.2451 14.4475 26.3137C14.5052 26.3822 14.5401 26.4641 14.5481 26.5498V28.0046C14.5712 28.5852 14.8435 29.1352 15.3078 29.5385C15.7721 29.9418 16.3921 30.167 17.037 30.1667H19.837C20.4985 30.1667 21.1331 29.9309 21.6022 29.5108C22.0713 29.0906 22.3368 28.5204 22.3407 27.9245V26.4697C22.3407 26.2829 22.5037 26.1494 22.7259 26.0693C22.8075 26.0216 22.9027 25.9963 23 25.9963C23.0973 25.9963 23.1925 26.0216 23.2741 26.0693L24.4 27.097C24.8692 27.5172 25.5014 27.7565 26.163 27.7643C26.489 27.7637 26.8117 27.7044 27.1119 27.5898C27.4121 27.4752 27.6839 27.3076 27.9111 27.097L29.8963 25.3086C30.1279 25.1014 30.3117 24.855 30.4371 24.5836C30.5625 24.3122 30.6271 24.0211 30.6271 23.727C30.6271 23.433 30.5625 23.1419 30.4371 22.8705C30.3117 22.5991 30.1279 22.3527 29.8963 22.1455L28.8148 21.1712C28.7619 21.0977 28.7337 21.0119 28.7337 20.9243C28.7337 20.8367 28.7619 20.7509 28.8148 20.6774C28.8482 20.5968 28.9063 20.5264 28.9823 20.4744C29.0584 20.4225 29.1493 20.391 29.2444 20.3838H30.8593C31.5013 20.3631 32.1095 20.1196 32.5569 19.7042C33.0042 19.2888 33.2558 18.7337 33.2593 18.1549V15.5658C33.2593 14.9699 32.9975 14.3982 32.5312 13.9755C32.0649 13.5529 31.4318 13.3137 30.7704 13.3102V13.3102ZM18.4444 21.4915C17.4189 21.4915 16.4164 21.2176 15.5637 20.7043C14.711 20.191 14.0464 19.4615 13.654 18.6079C13.2615 17.7544 13.1588 16.8151 13.3589 15.909C13.559 15.0029 14.0528 14.1705 14.778 13.5173C15.5031 12.864 16.427 12.4191 17.4329 12.2388C18.4387 12.0586 19.4813 12.1511 20.4287 12.5047C21.3762 12.8582 22.186 13.4569 22.7558 14.2251C23.3255 14.9933 23.6296 15.8964 23.6296 16.8203C23.6296 18.0592 23.0833 19.2473 22.1109 20.1234C21.1385 20.9994 19.8196 21.4915 18.4444 21.4915V21.4915Z" fill="#000" />
                        </svg>

                        <h1>Config</h1>


                    </div>

                </div>

                <div className="modal-config-content">

                    <h3>Nombre: <span>Luis Aneudy De Los Santos</span></h3>
                    <h3>Email: <span>Correo@correo.com</span></h3>

                    <div className='avatar-imagen'>
                        <img src={avatar} className='lg' alt="user image" />
                    </div>

                    <div className="flex">
                        
                    <input type='button' value='Editar' className='boton edit' />
                    <input type='button' value='Close' className='boton config' onClick={() => setConfigActive(false)} />
                    </div>

                </div>


            </div>
        </div>
    )
}

export default VentanaConfig