/* Composant Avatar 3D rotatif pour chaque agent DIA
 * Utilise CSS 3D transforms pour un effet de rotation continue
 * Chaque agent a une vitesse et direction de rotation unique
 */

import { useState } from "react";

const agentImages: Record<string, string> = {
  "AGT-001": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663356351544/zRpbTkvHnpBTnbyk.png",
  "AGT-002": "https://private-us-east-1.manuscdn.com/sessionFile/AVVMnfQz8hYKZkyExLzf3y/sandbox/cd9UgIm7VDH7slsAYCYtDO_1771109960700_na1fn_YWdlbnQtZGlhZ25vcw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQVZWTW5mUXo4aFlLWmt5RXhMemYzeS9zYW5kYm94L2NkOVVnSW03VkRIN3Nsc0FZQ1l0RE9fMTc3MTEwOTk2MDcwMF9uYTFmbl9ZV2RsYm5RdFpHbGhaMjV2Y3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=GqGjDM2LJlO8QZeVjCTiY6QV6auPJQVu7wuNxakCS2fSuYryPj2d5Js71NEnBxNwGnxxVrOycXZLpulsvK234SVBYRwl1cc4Qc2QO-LgVmRL3jhuonKaqnbRM6iO4cZgViwY1EJuDLmnmAoHSFXDCO6Nba6u6NeSCX4fuNo4LSQDhCabEFw45q1wqE9FihYSNCD3yS-GS2kcW2luOoe-xA9iLhCTCAiOsDRvSFs2cI71rXvjNnY2~g-LIjY0CkWHDB5Gn~ACM7Ii3PoDmK0k5j8snSbGGCeyoSRDCh7om6Tdf9tNhBHVtYAA5Tqtl5ZZ7ZBaZ9UUh1s6b8Zx4odbfg__",
  "AGT-003": "https://private-us-east-1.manuscdn.com/sessionFile/AVVMnfQz8hYKZkyExLzf3y/sandbox/cd9UgIm7VDH7slsAYCYtDO_1771109960700_na1fn_YWdlbnQtbHV4.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQVZWTW5mUXo4aFlLWmt5RXhMemYzeS9zYW5kYm94L2NkOVVnSW03VkRIN3Nsc0FZQ1l0RE9fMTc3MTEwOTk2MDcwMF9uYTFmbl9ZV2RsYm5RdGJIVjQucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=q~w82bTiXerkS7XhUaS6-sJs75xElpUP-avT7mlnAFY0CG0bjJ51q62B1pkOAKfMbD9qPB6DP90WQeE~1p15g9ZlLHB-yuLJO7eBvEBsUGLHQi6FxctZyrbIlevJpAkyl18AsmZALTXBYv37f00DlG9896w7TIveIMr00z-SsVv4jjXUuBgJWWu1F8PAdSPRNlBEjemscttonBIh0ePEWs7awZlPESlPQFJzPcj4yIYrsgNFheDC59UcnEWhblRTA5i-OI4hiL1cm0tvFHpGgxafFnNBeJ24GhCcwOJZ5OQMqh3B9AHPAjpNZKx2abGXPaG3YPqtrVllV4Y5NLW1sA__",
  "AGT-004": "https://private-us-east-1.manuscdn.com/sessionFile/AVVMnfQz8hYKZkyExLzf3y/sandbox/cd9UgIm7VDH7slsAYCYtDO_1771109960701_na1fn_YWdlbnQtY2hyb25vcw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQVZWTW5mUXo4aFlLWmt5RXhMemYzeS9zYW5kYm94L2NkOVVnSW03VkRIN3Nsc0FZQ1l0RE9fMTc3MTEwOTk2MDcwMV9uYTFmbl9ZV2RsYm5RdFkyaHliMjV2Y3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=aHgRfiSH7JtTKTK3zgpmH6BteQCCaEWflvkdU4gRU5IqNca4rM2v25lWBAlL-FEjCtFkVkSVYGlcdmZ9st3~5f~OnGDtrmNy-NOjjGQGqgSGo-aY9wudEqz~PL2MDbPHjgnmrg8KWgHgyQ1JMLaYwnmBngSXRir6CeIHRs-XiD6Nc7IgpUrfvVJl~TTaop0zJLTg926oRf6rMfAcSWH72l3iaFMbyYNSzb7jbvU~5PzB8dr4X9H2ojF6z0XQDZ1-SDDkens60QNEQTZeeNYMhzdQdG3E59NTXJZj3aq9dR93-HGZw1AZ~2wcs5F2e~HqLkfHIuhCWjafRdfw8jybtw__",
  "AGT-005": "https://private-us-east-1.manuscdn.com/sessionFile/AVVMnfQz8hYKZkyExLzf3y/sandbox/cd9UgIm7VDH7slsAYCYtDO_1771109960701_na1fn_YWdlbnQtbGV0aGU.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQVZWTW5mUXo4aFlLWmt5RXhMemYzeS9zYW5kYm94L2NkOVVnSW03VkRIN3Nsc0FZQ1l0RE9fMTc3MTEwOTk2MDcwMV9uYTFmbl9ZV2RsYm5RdGJHVjBhR1UucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=IYK9ji8hSlFSeB6w0oRL8sI0Czh0XuYiGXFuhOP1RkRccHmd6mH1JxbVoKIiQj8GzSuI6~K6QM3RWk0Sv7KZF2ywWolNoHHXVmftARM6H4nDvMHVo3-Ffsldg58w5HHYnFWfNnFLA3RsfovPFZMHqDJ1CR6IxnyTgoAnwXVGqZHaUvYCzyRnzTpNA0-S5SVsjYqHBYgH-5izbTYrZw1UBTyb4b7tR4y8gEtE~cwk~T4vT3aEk-Xs9bXnifC92PPwbqyo-Appe1FCAfuz184BoPya~PTqvAyG0Ki5z2AooEFHrex7JMvu24WSPYJS36OvEEbf7FS1T0EM6Z-r9ryzpQ__",
  "AGT-006": "https://private-us-east-1.manuscdn.com/sessionFile/AVVMnfQz8hYKZkyExLzf3y/sandbox/VPwRErTRxo6u8UBEkmNu9z_1771110034901_na1fn_YWdlbnQtcHN5Y2hl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQVZWTW5mUXo4aFlLWmt5RXhMemYzeS9zYW5kYm94L1ZQd1JFclRSeG82dThVQkVrbU51OXpfMTc3MTExMDAzNDkwMV9uYTFmbl9ZV2RsYm5RdGNITjVZMmhsLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=BZklWLY7PMnx4jlhXFBm8Hnn5hcaKDawbbwNXM77yMXzz2hD-VQxxMaE48KXDq97KOURXXKQCfvLVSFiQONZPKdIxi5JSMW-BbVXRfFqDQeR0ZkxUjUYzgkDZOHQLsJTlCmjoVYIOEeGw3OwEqxZwGYrJNVM3DhlO7Tp44EKNrGdsso5Om2wdi-LP3SK4G0RqFeOcHiDsjbvgX6Vsxc8-vyCLadhQtJS2hcyhrSDaWxXJjuPhPqQ4UeAS3QMZb269F3C5bKR-ioi0jLPJ-fsHzcQWJzaJV~6vOJk643lCE0D6kxCUspkOwGLZO2NLx9IlFas~Ayhs4UEcx6z~mGPRw__",
  "AGT-007": "https://private-us-east-1.manuscdn.com/sessionFile/AVVMnfQz8hYKZkyExLzf3y/sandbox/VPwRErTRxo6u8UBEkmNu9z_1771110034902_na1fn_YWdlbnQtZGVyYQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQVZWTW5mUXo4aFlLWmt5RXhMemYzeS9zYW5kYm94L1ZQd1JFclRSeG82dThVQkVrbU51OXpfMTc3MTExMDAzNDkwMl9uYTFmbl9ZV2RsYm5RdFpHVnlZUS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=iquGAH5PqxEYNPUdIaPVv42b8vohkfJhxhtWsnAZCWZGhxhg1n5rY2ttbBkiKDGruz4Szn75HTt85YHD7y45NxQZRTUrsQMh9yA~7hyQ-ZAP-LoZ6S2IM5YPtQxYCooaojSt5Jvb45iLb7v4D5jTToOCCgq6kYt9DOaHp1Kv80Ci8Mr6FiSDJ~G4SZWBGpDCXgx5WvrHrRqkM18GaR7pqxsk4UPt~EsB1tbcZoNJqSs47PNaUnRg3KShiUKA~sRWGuvrAaIONGssQYobKoO1rFiuScuYf3DeDR2b7-MqXSXO3R224nqqYsSv1J0QGD0LoM59LGjvPjPUa6arXMsMEw__",
  "AGT-008": "https://private-us-east-1.manuscdn.com/sessionFile/AVVMnfQz8hYKZkyExLzf3y/sandbox/VPwRErTRxo6u8UBEkmNu9z_1771110034902_na1fn_YWdlbnQtZXJvcw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQVZWTW5mUXo4aFlLWmt5RXhMemYzeS9zYW5kYm94L1ZQd1JFclRSeG82dThVQkVrbU51OXpfMTc3MTExMDAzNDkwMl9uYTFmbl9ZV2RsYm5RdFpYSnZjdy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=T3cnVu80UPd5CyVSFr7c2acfXHLlXhfgQCELiyDhya21Me-GUMS9hrrOPEVzOym-QZDLUWPdUPdAa1yOqcTjK2rMeTENFBDWo2qZfqx5~RwznhOfLen99rw6rKxN0T5ge9xog5cdOXaqREUorrehgodI3CTHTJ-aIw-0PpADwwdZqp9ko0ZslOiKNEcBUSUatAUvCEHhaP1CW81G3Yo1wcLKsLdsz4xza~fRV-~g82tLaiqIP8niLDjWeCnxTGGml2Sv47LIFSO5a53fGYDauNX4mFGgPppzQu-ZcchlrP8zxXLd1-LaRxXjAqk0FeU58nXPTm2yiKlfrYIXj6hS3w__",
  "AGT-009": "https://private-us-east-1.manuscdn.com/sessionFile/AVVMnfQz8hYKZkyExLzf3y/sandbox/VPwRErTRxo6u8UBEkmNu9z_1771110034902_na1fn_YWdlbnQtbWV0aXM.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQVZWTW5mUXo4aFlLWmt5RXhMemYzeS9zYW5kYm94L1ZQd1JFclRSeG82dThVQkVrbU51OXpfMTc3MTExMDAzNDkwMl9uYTFmbl9ZV2RsYm5RdGJXVjBhWE0ucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Z-IBpOwSCb5y9QfO6OHDkK8HHFXqi3XFZsIxeMdPCKP-SRnkyiVeIyweE3L5ZI17tZuii8jfgeu4sG0IXfDfPWCjQgy8T-29mJSnwziq5fKINVNFurHZARDSyLKerT~HRClVqeBi0J8617vNTWINx797qbc8nLDkk9QXo~9DU6saNy9t6lIodbNJuDJo2mQSv7H4kNSOlgnX9-sFjpJzSjfVkpG5MdwY4nXiIpAEtbt-RPGrOFq~t8ZZ-fZyuQnX6zBnyaJfcKhSmUCB4eCYVTTi5OGpJGLE307TUcX83aJolvXaDU0g2GC4-JCYv2TN8~1pn2da0NIZ0pUgnyVjlQ__",
  "AGT-010": "https://private-us-east-1.manuscdn.com/sessionFile/AVVMnfQz8hYKZkyExLzf3y/sandbox/VPwRErTRxo6u8UBEkmNu9z_1771110034903_na1fn_YWdlbnQtYW5pbWE.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQVZWTW5mUXo4aFlLWmt5RXhMemYzeS9zYW5kYm94L1ZQd1JFclRSeG82dThVQkVrbU51OXpfMTc3MTExMDAzNDkwM19uYTFmbl9ZV2RsYm5RdFlXNXBiV0UucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=jnXd7SeNQ2gfHX5Q3t7YWbI4T2J~OELMKxtz4VMB~6E8isMsiJUwZ0vXofWJEFpIY7KPCD2vKN7R6XA68y5QT95fijXtBNmmoc1sIeKDzW-OR9nmtfd26V~ax-LJU9prluhnUpNoyKy3UzGAk1zZae5NbTPDPfx7YsnZFkxltTRsC-xRqZNnVNlJeRZcut357uvZyCqsGjzHjjXLdiFz1YVUVs6szJwri6Ikd6itdQjC9wzDb8lepbGQpnj5C8ekJ6ppdt7Lcg3--mQGXI8UEbZh6FV9pt3w1jm8a0TgWqee6IfUSxL5YSoT-gL35i8Q25mUkxQUe50-zma8AO58NA__",
  "AGT-011": "https://private-us-east-1.manuscdn.com/sessionFile/AVVMnfQz8hYKZkyExLzf3y/sandbox/8EKFNkJGIyRv9NnlKZNrs7_1771110102536_na1fn_YWdlbnQtbm9lc2lz.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQVZWTW5mUXo4aFlLWmt5RXhMemYzeS9zYW5kYm94LzhFS0ZOa0pHSXlSdjlObmxLWk5yczdfMTc3MTExMDEwMjUzNl9uYTFmbl9ZV2RsYm5RdGJtOWxjMmx6LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=RG9WAg-QfAc9~LMCPTolapPDh546E~hUHPlBtsflmZcDi4s4QnrW15aGlv~8XUk-pZP31o693zFhs1FcuhV8~wBeoq-YtbPhuCZz7ZMDhBwqtg4s59LGFjOHOZ~vRZ~1lSTh49kQsq6LNoSH~Mhj71jlNWf9NH4Qe6wpVjBx~LFPiaYVelZN7o~8e1OuILxJTPBIdFA5a6VcEWPSni7EdJhsG58RqnbXlVBH8ZTbyYVdMJQ-SeCRuJfOxZO269eH90vUibWnRyZv8JMoBq9pBmgBOvJDLBTyrAPPQU9lED3Pi1v9P7fvoh4s1jWhNrRZG~dB9b8nL2SW1U-Zwo9cPg__",
  "AGT-012": "https://private-us-east-1.manuscdn.com/sessionFile/AVVMnfQz8hYKZkyExLzf3y/sandbox/8EKFNkJGIyRv9NnlKZNrs7_1771110102537_na1fn_YWdlbnQtY2hsb3Jvcw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQVZWTW5mUXo4aFlLWmt5RXhMemYzeS9zYW5kYm94LzhFS0ZOa0pHSXlSdjlObmxLWk5yczdfMTc3MTExMDEwMjUzN19uYTFmbl9ZV2RsYm5RdFkyaHNiM0p2Y3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=R3MyteYTrOcNLVrXruhcxYa6Om2KWQ~Upy2r3VEUl8prIRJaSD8xLV4BpRT1jRccq~MLInKSGhn7Y3880vULwE~~S2CNW~sszkTyNQ3Ga4FNihx0NAIK9kRZf7wMAV8gLxGJNPwPiSmw9WO2v2USigiS96yCGyH0bKBzdBGpY5TET23Y3R2tZtsqwdaw01hWFeWguDVEMjWRbA3uUXkzcNghsDy6IDTBcs99zWlm3dxV5sWgWQ938sj8OMIhkjUN0urnjgkMXlZuzMlRtCBAC-a0OdM~1RTvpoy-XuPijIIE0RY2wWOQOyjjCJVt31jcWZcdeequISpfAwUugWPKEQ__"
};

// Vitesses de rotation uniques par agent (en secondes pour un tour complet)
const agentRotationConfig: Record<string, { duration: number; direction: "normal" | "reverse"; tilt: number }> = {
  "AGT-001": { duration: 12, direction: "normal", tilt: 5 },    // MINOS - rotation lente, stable
  "AGT-002": { duration: 8, direction: "reverse", tilt: 8 },    // DIAGNOS - rotation rapide, scanning
  "AGT-003": { duration: 10, direction: "normal", tilt: 3 },    // LUX - rotation douce, lumineuse
  "AGT-004": { duration: 15, direction: "reverse", tilt: 2 },   // CHRONOS - rotation très lente, cyclique
  "AGT-005": { duration: 14, direction: "normal", tilt: 10 },   // LÉTHÉ - rotation fluide, ondulante
  "AGT-006": { duration: 9, direction: "reverse", tilt: 7 },    // PSYCHE - rotation émotive, variable
  "AGT-007": { duration: 11, direction: "normal", tilt: 4 },    // DERA - rotation défensive, stable
  "AGT-008": { duration: 7, direction: "reverse", tilt: 12 },   // EROS - rotation rapide, attractive
  "AGT-009": { duration: 6, direction: "normal", tilt: 15 },    // MÉTIS - rotation rapide, imprévisible
  "AGT-010": { duration: 5, direction: "reverse", tilt: 8 },    // ANIMA - rotation très rapide, énergique
  "AGT-011": { duration: 16, direction: "normal", tilt: 6 },    // NOESIS - rotation très lente, contemplative
  "AGT-012": { duration: 20, direction: "reverse", tilt: 3 },   // CHLOROS - rotation ultra-lente, organique
};

interface AgentAvatar3DProps {
  agentCode: string;
  agentColor: string;
  agentName: string;
  size?: "sm" | "md" | "lg" | "xl";
  showGlow?: boolean;
  pauseOnHover?: boolean;
}

export default function AgentAvatar3D({
  agentCode,
  agentColor,
  agentName,
  size = "md",
  showGlow = true,
  pauseOnHover = true,
}: AgentAvatar3DProps) {
  const [isHovered, setIsHovered] = useState(false);
  const imageUrl = agentImages[agentCode];
  const config = agentRotationConfig[agentCode] || { duration: 10, direction: "normal", tilt: 5 };

  const sizeClasses: Record<string, { container: string; image: string }> = {
    sm: { container: "w-16 h-16", image: "w-14 h-14" },
    md: { container: "w-28 h-28", image: "w-24 h-24" },
    lg: { container: "w-40 h-40", image: "w-36 h-36" },
    xl: { container: "w-56 h-56", image: "w-48 h-48" },
  };

  const s = sizeClasses[size];

  if (!imageUrl) return null;

  return (
    <div
      className={`${s.container} relative flex items-center justify-center`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: "600px" }}
    >
      {/* Glow ring */}
      {showGlow && (
        <div
          className="absolute inset-0 rounded-full opacity-40"
          style={{
            background: `radial-gradient(circle, ${agentColor}40 0%, transparent 70%)`,
            animation: `breathe 4s ease-in-out infinite`,
          }}
        />
      )}

      {/* Orbital ring */}
      <div
        className="absolute inset-[-4px] rounded-full border opacity-30"
        style={{
          borderColor: agentColor,
          animation: `spin ${config.duration * 2}s linear infinite ${config.direction}`,
        }}
      />

      {/* 3D rotating container */}
      <div
        className={`${s.image} rounded-full overflow-hidden relative`}
        style={{
          animation: pauseOnHover && isHovered
            ? "none"
            : `rotate3d-y ${config.duration}s ease-in-out infinite ${config.direction}`,
          transform: isHovered ? "rotateY(0deg) scale(1.1)" : undefined,
          transition: isHovered ? "transform 0.4s ease-out" : undefined,
          transformStyle: "preserve-3d",
          boxShadow: `0 0 20px ${agentColor}60, inset 0 0 15px ${agentColor}30`,
          border: `2px solid ${agentColor}80`,
        }}
      >
        <img
          src={imageUrl}
          alt={`Avatar 3D de ${agentName}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* Holographic overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${agentColor}15 0%, transparent 50%, ${agentColor}10 100%)`,
            mixBlendMode: "overlay",
          }}
        />
      </div>

      {/* Scan line effect */}
      <div
        className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
        style={{
          animation: `scan-vertical ${config.duration / 2}s linear infinite`,
        }}
      >
        <div
          className="absolute inset-x-0 h-[2px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${agentColor}60, transparent)`,
            top: "50%",
          }}
        />
      </div>
    </div>
  );
}

export { agentImages };
