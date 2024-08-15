import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export function JPHome() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/");
    }, []);
    return (
        <Helmet>
            <title>�yDiscord List�zDiscord�T�[�o�[�f���b�ʘb����������ڂł킩��I</title>
            <meta name="description"
                content="�f�B�X�R�[�h���X�g�͑S�Ă�discord���[�U�[�̃T�[�o�[�����̂��Y�݂��������܂��B�T�[�o�[�ɓ���O���獡�ʘb���̐l������ڂŕ�����f���T�C�g�ł��B���������ȃT�[�o�[�T���ɔY�܂Ȃ��Ă����v�I���Ȃ���discord���y���߂����S�͂ŃT�|�[�g����f���T�[�r�X�A�f�B�X�R�[�h���X�g�ł��B" />
            <meta name="keywords" content="�f�B�X�R�[�h���X�g, discord, �f�B�X�R�[�h, discord list, �f����" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Discord List" />
            <meta property="og:description" content="�ʘb����������ڂł킩��I����������ʘb�l�����ꗗ�ŕ\�������B��������Discord List�ŃT�[�o�[��T���܂��傤��" />
            <meta property="og:url" content="https://discordlist.kolysis.com/" />
        </Helmet>
    );
}
