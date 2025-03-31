import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { getSession } from "../../data/wdfpData";
import { generateDataHeaders } from "../../utils";

interface GetRoomsBody {
    event_id: number,
    viewer_id: number,
    category_id: number
}

const routes = async (fastify: FastifyInstance) => {
    fastify.post("/get_rooms", async (request: FastifyRequest, reply: FastifyReply) => {
        const body = request.body as GetRoomsBody

        const viewerId = body.viewer_id
        if (!viewerId || isNaN(viewerId)) return reply.status(400).send({
            "error": "Bad Request",
            "message": "Invalid request body."
        })

        const viewerIdSession = await getSession(viewerId.toString())
        if (!viewerIdSession) return reply.status(400).send({
            "error": "Bad Request",
            "message": "Invalid viewer id."
        })

        reply.header("content-type", "application/x-msgpack")
        return reply.status(200).send({
            "data_headers": generateDataHeaders({
                viewer_id: viewerId
            }),
            "data": {
                "rooms": []
            }
        })
    })

    fastify.post("/create_room", async (request: FastifyRequest, reply: FastifyReply) => {
        const body = request.body as GetRoomsBody

        const viewerId = body.viewer_id
        if (!viewerId || isNaN(viewerId)) return reply.status(400).send({
            "error": "Bad Request",
            "message": "Invalid request body."
        })

        const viewerIdSession = await getSession(viewerId.toString())
        if (!viewerIdSession) return reply.status(400).send({
            "error": "Bad Request",
            "message": "Invalid viewer id."
        })

        reply.header("content-type", "application/x-msgpack")
        return reply.status(200).send({
            "data_headers": generateDataHeaders({
                viewer_id: viewerId
            }),
            "data": {
                "room_number": "368851",
                "room_url": ""
            }
        })
    })

    fastify.post("/prepare", async (request: FastifyRequest, reply: FastifyReply) => {
        const body = request.body as GetRoomsBody

        const viewerId = body.viewer_id
        if (!viewerId || isNaN(viewerId)) return reply.status(400).send({
            "error": "Bad Request",
            "message": "Invalid request body."
        })

        const viewerIdSession = await getSession(viewerId.toString())
        if (!viewerIdSession) return reply.status(400).send({
            "error": "Bad Request",
            "message": "Invalid viewer id."
        })

        reply.header("content-type", "application/x-msgpack")
        return reply.status(200).send({
            "data_headers": generateDataHeaders({
                viewer_id: viewerId
            }),
            "data": []
        })
    })

    fastify.post("/select_room", async (request: FastifyRequest, reply: FastifyReply) => {
        const body = request.body as GetRoomsBody

        const viewerId = body.viewer_id
        if (!viewerId || isNaN(viewerId)) return reply.status(400).send({
            "error": "Bad Request",
            "message": "Invalid request body."
        })

        const viewerIdSession = await getSession(viewerId.toString())
        if (!viewerIdSession) return reply.status(400).send({
            "error": "Bad Request",
            "message": "Invalid viewer id."
        })

        reply.header("content-type", "application/x-msgpack")
        return reply.status(200).send({
            "data_headers": generateDataHeaders({
                viewer_id: viewerId
            }),
            "data": {
                "room_number": "368851",
                "category_id": 2,
                "quest_id": 1001001,
                "ip_address": process.env.LISTEN_TCP_HOST,
                "port": process.env.LISTEN_TCP_PORT === undefined ? 18888 : Number.parseInt(process.env.LISTEN_TCP_PORT),
                "application_update_url": "",
                "host_entry_time": 1720135255,
                "raising_state": 1,
                "is_pickup": false,
                "room_sequence": 16852849
            }
        })
    })
}

export default routes;