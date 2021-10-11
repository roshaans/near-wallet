import React, { useState } from 'react';
import styled from 'styled-components';

import FormButton from '../common/FormButton';
import Modal from '../common/modal/Modal';
import ArrowIcon from '../svg/ArrowIcon';
import NFTTransferModal from './NFTTransferModal';


const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0 30px 0;

    h2 {
        color: #72727A !important;
        font-size: 16px !important;
        font-weight: 400 !important;
        line-height: 150%;
        text-align: center;
        margin: 20px 0 30px 0;
    }

    a {
        border: 2px solid #F5F5F3;
        border-radius: 8px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 110px;
        margin: 10px 0;
        transition: 100ms;

        :hover {
            border-color: #8FCDFF;
            background-color: #F0F9FF;
        }

        img {
            max-height: 35px;
        }
    } 

    .title {
        position: static;
        width: 429px;
        left: 0px;
        top: 0px;
        
        /* heading/H1 */
        
        font-family: Inter;
        font-style: normal;
        font-weight: 900;
        font-size: 31px;
        line-height: 130%;
        /* or 40px */
        
        display: flex;
        align-items: center;
        font-feature-settings: 'zero' on;
        
        /* gray/neutral/800 */
        
        color: #272729;
    }
    margin: 8px 0px;

    .desc {
        position: static;
        width: 429px;
        left: 0px;
        top: 128px;

        /* paragraph/body/default */

        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        /* or 24px */

        display: flex;
        align-items: center;
        font-feature-settings: 'zero' on;

        /* gray/neutral/800 */

        color: #272729;
    }

    button {
        &.gray-blue {
            width: 100% !important;
            max-width: 400px;
        }
    }
`;


export default function NFTDetailModal({ open, onClose, nft }) {
    console.log(nft);
    const metadata = nft.metadata;
    const [transferNftDetail, setTransferNftDetail] = useState();

    return (
        <Modal
            id='nft-detail-modal'
            isOpen={open}
            onClose={onClose}
            closeButton='false'
            modalSize='lg'
        >
            <StyledContainer className='small-centered'>
                <FormButton
                    color='link go-back'
                    onClick={() => onClose()}
                >
                    <ArrowIcon />
                </FormButton>

            <h1 className="title">{metadata.title}</h1>
            <p className="desc">{metadata.description}</p>
            {console.log('modal open')}

            <FormButton 
                color='gray-blue' 
                onClick={() => setTransferNftDetail(nft)}
            >
                Transfer
            </FormButton>
            {transferNftDetail &&
                <NFTTransferModal
                    open={!!transferNftDetail}
                    onClose={() => setTransferNftDetail()}
                    nft={transferNftDetail}>
                </NFTTransferModal>
            }

            </StyledContainer>
        </Modal>
    );
}
