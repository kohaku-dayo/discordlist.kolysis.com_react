import Container from 'react-bootstrap/Container';
import { HeaderUnion } from '../Component/union/headerUnion';
import Row from 'react-bootstrap/Row';
import { GuildCardContainer } from '../Component/union/SectionUnion';
import { useEffect, useState } from 'react';
import { getDiscordGuildIcon, getTagRankingCurrentServers } from '../Function/APIController';
import { useParams } from "react-router-dom";
import { GuildCard } from '../Component/parts/conversion';
import { SearchBar } from '../Component/parts/searchBar';
import { OverlayLoading } from "react-loading-randomizable";
import Stack from 'react-bootstrap/Stack';

export function TagView() {
    const params = useParams();
    const [guildCards, setGuildCards] = useState([<></>]);
    const [loading, setLoading] = useState(true);
    const [hasResult, setHasResult] = useState(false);

    useEffect(() => {
        getTagRankingCurrentServers(params['name'])
            .then((response) => {
                if (response.data === "" || response.data.length === 0) {
                    setLoading(false);
                    setHasResult(false);
                    return;
                }
                setGuildCards(
                    response.data.map((value, index) => {
                        return <GuildCard
                            key={index}
                            guildID={value['id']}
                            guildIcon={value['icon'] ? getDiscordGuildIcon(value['id'], value['icon']) : ""}
                            guildName={value['name']}
                            guildInviteURL={value['invite_url']}
                            guildDescription={value['description']}
                            dataString={
                                <>
                                    現在のVCの接続人数：
                                    {value['user_num'] !== 0 ?
                                        <span className="ms-1" style={{ color: '#12c74b' }}>{value['user_num']}</span>
                                        :
                                        <span className="ms-1">{value['user_num']}</span>
                                    }
                                </>
                            }
                        />
                    })
                );
                setHasResult(true);
                setLoading(false);
            })
    }, [params])

    return (
        <>
            <OverlayLoading active={loading} />
            <Container>
                <HeaderUnion />
                <div className="mt-3 mb-5 d-flex justify-content-center align-items-center">
                    <SearchBar />
                </div>
                <div className="mt-5">
                    <div className="mt-5">
                        {!loading ?
                            <>
                                {hasResult ?
                                    <GuildCardContainer>
                                        {guildCards}
                                    </GuildCardContainer>
                                    :
                                    <>
                                        <div className="d-flex justify-content-center align-items-center mb-5">
                                            <p className="mb-5">タグ「{params['name']}」の情報が見つかりませんでした。</p>
                                        </div>
                                    </>
                                }
                            </>
                            :
                            <></>
                        }
                    </div>
                </div>
            </Container>
        </>
    );
}